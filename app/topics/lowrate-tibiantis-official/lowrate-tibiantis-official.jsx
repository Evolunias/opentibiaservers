import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-official');
}

export default function LowrateTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-official" />;
}
