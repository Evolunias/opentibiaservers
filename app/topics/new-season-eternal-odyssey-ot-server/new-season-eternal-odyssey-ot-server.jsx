import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-ot-server');
}

export default function NewSeasonEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-ot-server" />;
}
