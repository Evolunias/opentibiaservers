import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-official');
}

export default function PopularTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-official" />;
}
