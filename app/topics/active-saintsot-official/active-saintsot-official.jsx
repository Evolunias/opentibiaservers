import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-official');
}

export default function ActiveSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-official" />;
}
