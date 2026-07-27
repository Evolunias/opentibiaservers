import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-website');
}

export default function CurrentOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-website" />;
}
