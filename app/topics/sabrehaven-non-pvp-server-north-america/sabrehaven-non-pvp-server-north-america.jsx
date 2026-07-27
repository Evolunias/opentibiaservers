import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-north-america');
}

export default function SabrehavenNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-north-america" />;
}
