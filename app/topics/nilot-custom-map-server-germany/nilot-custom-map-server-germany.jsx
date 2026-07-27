import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-germany');
}

export default function NilotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-germany" />;
}
