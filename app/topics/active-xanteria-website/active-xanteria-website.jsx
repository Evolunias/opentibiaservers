import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-website');
}

export default function ActiveXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-website" />;
}
