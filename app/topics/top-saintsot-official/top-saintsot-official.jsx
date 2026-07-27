import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-official');
}

export default function TopSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-official" />;
}
