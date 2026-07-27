import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-pvp-server');
}

export default function Tibiascape96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-pvp-server" />;
}
