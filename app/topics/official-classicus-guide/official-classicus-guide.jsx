import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-guide');
}

export default function OfficialClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-guide" />;
}
