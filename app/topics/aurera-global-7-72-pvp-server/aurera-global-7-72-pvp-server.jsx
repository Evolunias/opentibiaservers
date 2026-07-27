import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-72-pvp-server');
}

export default function AureraGlobal772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-72-pvp-server" />;
}
