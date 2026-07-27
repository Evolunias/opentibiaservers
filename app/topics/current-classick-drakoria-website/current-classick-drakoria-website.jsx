import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-website');
}

export default function CurrentClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-website" />;
}
