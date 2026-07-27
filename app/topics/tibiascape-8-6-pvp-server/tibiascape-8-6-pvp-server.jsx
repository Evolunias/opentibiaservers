import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-pvp-server');
}

export default function Tibiascape86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-pvp-server" />;
}
