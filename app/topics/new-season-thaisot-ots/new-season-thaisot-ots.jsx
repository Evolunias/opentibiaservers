import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-ots');
}

export default function NewSeasonThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-ots" />;
}
