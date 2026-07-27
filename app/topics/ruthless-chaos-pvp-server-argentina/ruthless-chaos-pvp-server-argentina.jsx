import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-argentina');
}

export default function RuthlessChaosPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-argentina" />;
}
