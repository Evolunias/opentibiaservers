import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-usa');
}

export default function SabrehavenNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-usa" />;
}
