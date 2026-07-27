import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-ots');
}

export default function NewSeasonSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-ots" />;
}
