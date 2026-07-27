import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-official');
}

export default function OfficialSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-official" />;
}
