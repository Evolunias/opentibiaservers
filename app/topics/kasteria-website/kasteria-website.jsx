import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-website');
}

export default function KasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="kasteria-website" />;
}
