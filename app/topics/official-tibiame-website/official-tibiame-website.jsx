import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-website');
}

export default function OfficialTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-website" />;
}
