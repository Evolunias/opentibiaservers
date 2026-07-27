import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-pvp-server');
}

export default function Tibiascape81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-pvp-server" />;
}
