import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-pvp-server');
}

export default function Tibiascape12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-pvp-server" />;
}
