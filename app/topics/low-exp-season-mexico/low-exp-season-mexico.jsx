import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-mexico');
}

export default function LowExpSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-mexico" />;
}
