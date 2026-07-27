import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-aurera-global-server');
}

export default function PvpAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-aurera-global-server" />;
}
