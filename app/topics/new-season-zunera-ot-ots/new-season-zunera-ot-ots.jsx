import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-ots');
}

export default function NewSeasonZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-ots" />;
}
