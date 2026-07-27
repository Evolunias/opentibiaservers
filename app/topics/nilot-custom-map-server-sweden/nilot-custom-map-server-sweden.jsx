import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-sweden');
}

export default function NilotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-sweden" />;
}
