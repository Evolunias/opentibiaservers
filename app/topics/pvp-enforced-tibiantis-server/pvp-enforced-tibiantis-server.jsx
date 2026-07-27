import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibiantis-server');
}

export default function PvpEnforcedTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibiantis-server" />;
}
