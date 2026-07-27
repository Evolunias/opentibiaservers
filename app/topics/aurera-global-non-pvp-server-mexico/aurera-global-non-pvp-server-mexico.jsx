import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-mexico');
}

export default function AureraGlobalNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-mexico" />;
}
