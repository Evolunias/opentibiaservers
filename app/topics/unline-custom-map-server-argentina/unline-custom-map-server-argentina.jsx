import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-argentina');
}

export default function UnlineCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-argentina" />;
}
