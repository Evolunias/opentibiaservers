import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-guide');
}

export default function OfficialImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-guide" />;
}
