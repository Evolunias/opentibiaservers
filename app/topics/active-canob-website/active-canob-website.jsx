import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-website');
}

export default function ActiveCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-canob-website" />;
}
