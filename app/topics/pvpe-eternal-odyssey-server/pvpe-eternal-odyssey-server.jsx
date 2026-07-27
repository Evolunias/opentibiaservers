import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-eternal-odyssey-server');
}

export default function PvpeEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-eternal-odyssey-server" />;
}
