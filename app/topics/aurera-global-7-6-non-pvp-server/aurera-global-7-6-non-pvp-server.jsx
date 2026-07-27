import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-non-pvp-server');
}

export default function AureraGlobal76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-non-pvp-server" />;
}
