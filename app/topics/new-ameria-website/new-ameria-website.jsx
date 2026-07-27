import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-website');
}

export default function NewAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-website" />;
}
