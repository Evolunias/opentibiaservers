import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-latin-america');
}

export default function SabrehavenNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-latin-america" />;
}
