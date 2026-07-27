import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-website');
}

export default function CanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="canob-website" />;
}
