import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-europe');
}

export default function AureraGlobalNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-europe" />;
}
