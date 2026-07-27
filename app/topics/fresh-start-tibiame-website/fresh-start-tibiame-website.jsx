import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-website');
}

export default function FreshStartTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-website" />;
}
