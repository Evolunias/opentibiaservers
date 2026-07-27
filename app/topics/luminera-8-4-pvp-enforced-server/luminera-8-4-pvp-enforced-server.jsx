import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-pvp-enforced-server');
}

export default function Luminera84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-pvp-enforced-server" />;
}
