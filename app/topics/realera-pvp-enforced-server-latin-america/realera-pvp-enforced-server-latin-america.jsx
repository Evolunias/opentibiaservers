import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-latin-america');
}

export default function RealeraPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-latin-america" />;
}
