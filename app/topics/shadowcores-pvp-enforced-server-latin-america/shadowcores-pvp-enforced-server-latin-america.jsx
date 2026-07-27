import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-latin-america');
}

export default function ShadowcoresPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-latin-america" />;
}
