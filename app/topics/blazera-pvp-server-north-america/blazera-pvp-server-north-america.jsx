import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-north-america');
}

export default function BlazeraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-north-america" />;
}
