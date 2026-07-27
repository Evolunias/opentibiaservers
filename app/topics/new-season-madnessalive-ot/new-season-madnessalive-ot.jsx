import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-ot');
}

export default function NewSeasonMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-ot" />;
}
