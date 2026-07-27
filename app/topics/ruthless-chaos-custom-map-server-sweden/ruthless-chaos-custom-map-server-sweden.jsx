import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-sweden');
}

export default function RuthlessChaosCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-sweden" />;
}
