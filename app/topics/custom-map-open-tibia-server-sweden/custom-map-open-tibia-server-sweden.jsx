import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-sweden');
}

export default function CustomMapOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-sweden" />;
}
