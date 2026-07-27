import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-website');
}

export default function TopClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-website" />;
}
