import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-website');
}

export default function NewCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-canob-website" />;
}
