import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-mexico');
}

export default function UnlineCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-mexico" />;
}
