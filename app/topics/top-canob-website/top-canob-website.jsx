import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-website');
}

export default function TopCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-canob-website" />;
}
