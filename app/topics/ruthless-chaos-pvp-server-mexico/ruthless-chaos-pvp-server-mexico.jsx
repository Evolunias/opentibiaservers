import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-mexico');
}

export default function RuthlessChaosPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-mexico" />;
}
