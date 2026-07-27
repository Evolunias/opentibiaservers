import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-usa');
}

export default function RuthlessChaosPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-usa" />;
}
