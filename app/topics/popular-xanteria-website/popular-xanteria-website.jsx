import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-website');
}

export default function PopularXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-website" />;
}
