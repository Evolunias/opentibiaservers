import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-nostalther-server');
}

export default function PvpEnforcedNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-nostalther-server" />;
}
