import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-website');
}

export default function CurrentUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-unline-website" />;
}
