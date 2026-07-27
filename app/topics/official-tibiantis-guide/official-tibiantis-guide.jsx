import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-guide');
}

export default function OfficialTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-guide" />;
}
