import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-argentina');
}

export default function SabrehavenNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-argentina" />;
}
