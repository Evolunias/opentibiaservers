import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-latin-america');
}

export default function RealestaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-latin-america" />;
}
