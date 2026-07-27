import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-guide');
}

export default function OfficialMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-guide" />;
}
