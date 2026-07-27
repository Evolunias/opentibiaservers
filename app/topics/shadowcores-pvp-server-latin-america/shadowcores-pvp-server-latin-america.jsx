import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-latin-america');
}

export default function ShadowcoresPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-latin-america" />;
}
