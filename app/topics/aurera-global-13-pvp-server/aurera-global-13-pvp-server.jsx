import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-pvp-server');
}

export default function AureraGlobal13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-pvp-server" />;
}
