import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-website');
}

export default function LowrateCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-website" />;
}
