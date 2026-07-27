import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-pvp-server');
}

export default function Tibiascape71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-pvp-server" />;
}
