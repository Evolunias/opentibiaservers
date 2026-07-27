import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-non-pvp-server');
}

export default function AureraGlobal74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-non-pvp-server" />;
}
