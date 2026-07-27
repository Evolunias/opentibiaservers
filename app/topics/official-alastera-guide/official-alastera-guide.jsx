import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-guide');
}

export default function OfficialAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-guide" />;
}
