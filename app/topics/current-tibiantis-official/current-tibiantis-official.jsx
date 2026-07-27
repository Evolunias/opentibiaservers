import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-official');
}

export default function CurrentTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-official" />;
}
