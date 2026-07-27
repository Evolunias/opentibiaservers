import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-client');
}

export default function NewSeasonMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-client" />;
}
