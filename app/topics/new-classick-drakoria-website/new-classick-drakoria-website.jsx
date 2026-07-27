import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-website');
}

export default function NewClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-website" />;
}
