import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-eternal-odyssey-server');
}

export default function PvpEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-eternal-odyssey-server" />;
}
