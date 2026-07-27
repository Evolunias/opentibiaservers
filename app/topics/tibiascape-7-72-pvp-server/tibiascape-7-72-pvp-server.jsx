import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-pvp-server');
}

export default function Tibiascape772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-pvp-server" />;
}
