import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-france');
}

export default function ThaisotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-france" />;
}
