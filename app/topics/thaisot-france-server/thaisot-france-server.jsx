import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-france-server');
}

export default function ThaisotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-france-server" />;
}
