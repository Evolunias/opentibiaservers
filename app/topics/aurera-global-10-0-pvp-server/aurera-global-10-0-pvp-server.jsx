import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-pvp-server');
}

export default function AureraGlobal100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-pvp-server" />;
}
