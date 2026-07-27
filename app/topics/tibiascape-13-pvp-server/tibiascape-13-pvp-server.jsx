import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-pvp-server');
}

export default function Tibiascape13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-pvp-server" />;
}
