import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-pvp-server');
}

export default function Tibiascape11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-pvp-server" />;
}
