import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-website');
}

export default function CustomXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-website" />;
}
