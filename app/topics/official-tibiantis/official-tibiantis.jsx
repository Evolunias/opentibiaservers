import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis');
}

export default function OfficialTibiantisKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis" />;
}
