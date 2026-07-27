import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-france-server');
}

export default function RuthlessChaosFranceServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-france-server" />;
}
