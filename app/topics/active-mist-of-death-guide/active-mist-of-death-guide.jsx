import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-guide');
}

export default function ActiveMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-guide" />;
}
