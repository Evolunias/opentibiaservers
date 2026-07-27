import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-uk');
}

export default function AureraGlobalNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-uk" />;
}
