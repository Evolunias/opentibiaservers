import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-official');
}

export default function PopularTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-official" />;
}
