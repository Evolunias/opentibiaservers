import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-germany');
}

export default function SabrehavenNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-germany" />;
}
