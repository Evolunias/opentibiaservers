import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-pvp-server');
}

export default function Tibiascape15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-pvp-server" />;
}
