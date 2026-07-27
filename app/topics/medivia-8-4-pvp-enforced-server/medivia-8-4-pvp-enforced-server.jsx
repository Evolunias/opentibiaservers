import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-pvp-enforced-server');
}

export default function Medivia84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-pvp-enforced-server" />;
}
