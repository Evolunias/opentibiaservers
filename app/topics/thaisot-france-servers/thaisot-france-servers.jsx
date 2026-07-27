import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-france-servers');
}

export default function ThaisotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-france-servers" />;
}
