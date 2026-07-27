import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-south-america');
}

export default function TibiantisNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-south-america" />;
}
