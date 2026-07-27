import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-sweden');
}

export default function ShadowcoresCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-sweden" />;
}
