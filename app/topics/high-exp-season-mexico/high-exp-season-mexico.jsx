import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-mexico');
}

export default function HighExpSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-mexico" />;
}
