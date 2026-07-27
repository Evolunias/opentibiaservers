import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-website');
}

export default function CustomTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-website" />;
}
