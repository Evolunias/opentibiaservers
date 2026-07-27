import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-germany');
}

export default function TibiascapeNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-germany" />;
}
