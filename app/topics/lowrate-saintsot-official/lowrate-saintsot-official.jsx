import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-official');
}

export default function LowrateSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-official" />;
}
