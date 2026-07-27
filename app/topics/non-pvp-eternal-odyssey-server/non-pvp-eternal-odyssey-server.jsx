import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-eternal-odyssey-server');
}

export default function NonPvpEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-eternal-odyssey-server" />;
}
