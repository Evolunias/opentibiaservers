import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-website');
}

export default function FreshStartXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-website" />;
}
