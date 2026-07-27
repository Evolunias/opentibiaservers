import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-pvp-server');
}

export default function Tibiascape76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-pvp-server" />;
}
