import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-official');
}

export default function TopTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-official" />;
}
