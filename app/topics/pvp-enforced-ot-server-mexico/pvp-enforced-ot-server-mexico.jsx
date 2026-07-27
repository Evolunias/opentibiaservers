import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-mexico');
}

export default function PvpEnforcedOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-mexico" />;
}
