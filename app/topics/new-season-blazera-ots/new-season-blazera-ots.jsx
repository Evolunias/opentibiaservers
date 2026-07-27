import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-ots');
}

export default function NewSeasonBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-ots" />;
}
