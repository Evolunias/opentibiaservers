import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-website');
}

export default function CurrentCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-canob-website" />;
}
