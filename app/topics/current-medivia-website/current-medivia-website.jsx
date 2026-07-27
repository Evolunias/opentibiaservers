import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-website');
}

export default function CurrentMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-website" />;
}
