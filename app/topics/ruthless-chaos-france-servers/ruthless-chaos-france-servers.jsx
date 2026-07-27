import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-france-servers');
}

export default function RuthlessChaosFranceServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-france-servers" />;
}
