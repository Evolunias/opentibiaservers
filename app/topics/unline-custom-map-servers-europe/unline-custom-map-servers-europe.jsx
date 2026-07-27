import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-europe');
}

export default function UnlineCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-europe" />;
}
