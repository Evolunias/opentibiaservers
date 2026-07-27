import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot');
}

export default function NewSeasonZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot" />;
}
