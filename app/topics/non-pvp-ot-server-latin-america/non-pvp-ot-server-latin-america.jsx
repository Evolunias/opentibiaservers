import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-latin-america');
}

export default function NonPvpOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-latin-america" />;
}
