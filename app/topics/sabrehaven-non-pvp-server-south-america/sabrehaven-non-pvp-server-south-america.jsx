import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-south-america');
}

export default function SabrehavenNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-south-america" />;
}
