import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-demolidores-server');
}

export default function PvpEnforcedDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-demolidores-server" />;
}
