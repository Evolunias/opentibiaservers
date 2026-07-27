import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-pvp-server');
}

export default function Tibiascape100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-pvp-server" />;
}
