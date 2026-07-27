import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-germany');
}

export default function NilotCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-germany" />;
}
