import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-non-pvp-server');
}

export default function AureraGlobal100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-non-pvp-server" />;
}
