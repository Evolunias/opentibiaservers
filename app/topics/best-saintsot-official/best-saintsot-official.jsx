import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-official');
}

export default function BestSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-official" />;
}
