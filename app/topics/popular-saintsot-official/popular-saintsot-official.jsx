import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-official');
}

export default function PopularSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-official" />;
}
