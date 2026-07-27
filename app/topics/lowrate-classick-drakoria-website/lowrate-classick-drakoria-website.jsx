import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-website');
}

export default function LowrateClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-website" />;
}
