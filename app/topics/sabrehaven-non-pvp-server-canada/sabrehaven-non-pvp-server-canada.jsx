import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-canada');
}

export default function SabrehavenNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-canada" />;
}
