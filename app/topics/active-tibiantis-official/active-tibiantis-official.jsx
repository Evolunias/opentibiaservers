import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-official');
}

export default function ActiveTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-official" />;
}
