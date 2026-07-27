import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-official');
}

export default function OfficialTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-official" />;
}
