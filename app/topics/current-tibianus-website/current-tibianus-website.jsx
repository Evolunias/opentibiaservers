import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-website');
}

export default function CurrentTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-website" />;
}
