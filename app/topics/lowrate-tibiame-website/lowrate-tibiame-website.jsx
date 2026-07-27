import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-website');
}

export default function LowrateTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-website" />;
}
