import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-website');
}

export default function TibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibiame-website" />;
}
