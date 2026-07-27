import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-website');
}

export default function ActiveTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-website" />;
}
