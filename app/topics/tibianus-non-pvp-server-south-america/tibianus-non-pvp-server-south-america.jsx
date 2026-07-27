import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-south-america');
}

export default function TibianusNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-south-america" />;
}
