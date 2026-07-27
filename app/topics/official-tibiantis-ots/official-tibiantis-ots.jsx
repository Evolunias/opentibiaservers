import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-ots');
}

export default function OfficialTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-ots" />;
}
