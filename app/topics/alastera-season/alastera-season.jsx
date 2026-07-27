import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-season');
}

export default function AlasteraSeasonKeywordPage() {
  return <StaticKeywordPage slug="alastera-season" />;
}
