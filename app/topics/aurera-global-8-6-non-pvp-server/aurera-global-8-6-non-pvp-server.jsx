import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-non-pvp-server');
}

export default function AureraGlobal86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-non-pvp-server" />;
}
