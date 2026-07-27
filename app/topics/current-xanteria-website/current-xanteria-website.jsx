import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-website');
}

export default function CurrentXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-website" />;
}
