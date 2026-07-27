import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-pvp-enforced-server');
}

export default function Tibiascape1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-pvp-enforced-server" />;
}
