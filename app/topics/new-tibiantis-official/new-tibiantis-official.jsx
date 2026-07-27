import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-official');
}

export default function NewTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-official" />;
}
