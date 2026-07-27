import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-south-america');
}

export default function TibiantisPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-south-america" />;
}
