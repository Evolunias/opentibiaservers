import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-website');
}

export default function CustomCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-website" />;
}
