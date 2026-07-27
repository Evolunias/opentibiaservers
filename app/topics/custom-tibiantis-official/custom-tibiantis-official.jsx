import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-official');
}

export default function CustomTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-official" />;
}
