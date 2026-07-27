import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-guide');
}

export default function OfficialOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-guide" />;
}
