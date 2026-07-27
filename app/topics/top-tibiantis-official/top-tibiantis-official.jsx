import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-official');
}

export default function TopTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-official" />;
}
