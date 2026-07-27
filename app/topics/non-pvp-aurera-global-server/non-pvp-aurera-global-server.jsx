import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-aurera-global-server');
}

export default function NonPvpAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-aurera-global-server" />;
}
