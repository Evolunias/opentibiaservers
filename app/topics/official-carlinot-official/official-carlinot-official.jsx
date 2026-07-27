import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-official');
}

export default function OfficialCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-official" />;
}
