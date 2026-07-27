import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-ot');
}

export default function NewSeasonSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-ot" />;
}
