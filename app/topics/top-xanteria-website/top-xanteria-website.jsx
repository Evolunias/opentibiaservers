import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-website');
}

export default function TopXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-website" />;
}
