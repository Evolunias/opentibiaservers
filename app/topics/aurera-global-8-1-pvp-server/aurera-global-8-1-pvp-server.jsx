import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-pvp-server');
}

export default function AureraGlobal81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-pvp-server" />;
}
