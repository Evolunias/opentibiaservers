import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-mexico');
}

export default function SabrehavenNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-mexico" />;
}
