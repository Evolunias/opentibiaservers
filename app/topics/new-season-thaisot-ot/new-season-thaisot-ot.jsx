import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-ot');
}

export default function NewSeasonThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-ot" />;
}
