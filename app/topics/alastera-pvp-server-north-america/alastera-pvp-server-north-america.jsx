import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-north-america');
}

export default function AlasteraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-north-america" />;
}
