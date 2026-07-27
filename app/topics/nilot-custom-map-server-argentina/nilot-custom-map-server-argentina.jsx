import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-argentina');
}

export default function NilotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-argentina" />;
}
