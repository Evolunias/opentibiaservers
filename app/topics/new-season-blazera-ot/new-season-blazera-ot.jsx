import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-ot');
}

export default function NewSeasonBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-ot" />;
}
