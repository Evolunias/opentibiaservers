import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-website');
}

export default function OfficialClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-website" />;
}
