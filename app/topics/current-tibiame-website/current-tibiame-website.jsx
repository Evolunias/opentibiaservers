import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-website');
}

export default function CurrentTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-website" />;
}
