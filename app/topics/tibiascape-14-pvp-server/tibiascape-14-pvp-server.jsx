import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-pvp-server');
}

export default function Tibiascape14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-pvp-server" />;
}
