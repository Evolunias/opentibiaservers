import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-south-america');
}

export default function TibianusPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-south-america" />;
}
