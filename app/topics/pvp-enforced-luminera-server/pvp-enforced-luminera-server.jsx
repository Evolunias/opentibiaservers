import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-luminera-server');
}

export default function PvpEnforcedLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-luminera-server" />;
}
