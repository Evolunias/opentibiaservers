import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-server');
}

export default function NewSeasonMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-server" />;
}
