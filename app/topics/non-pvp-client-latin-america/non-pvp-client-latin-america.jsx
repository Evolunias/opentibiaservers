import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-latin-america');
}

export default function NonPvpClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-latin-america" />;
}
