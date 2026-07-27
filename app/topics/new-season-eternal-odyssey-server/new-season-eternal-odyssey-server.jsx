import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-server');
}

export default function NewSeasonEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-server" />;
}
