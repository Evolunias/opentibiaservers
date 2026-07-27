import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-south-america');
}

export default function AlasteraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-south-america" />;
}
