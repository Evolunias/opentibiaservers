import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-98-non-pvp-server');
}

export default function AureraGlobal1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-98-non-pvp-server" />;
}
