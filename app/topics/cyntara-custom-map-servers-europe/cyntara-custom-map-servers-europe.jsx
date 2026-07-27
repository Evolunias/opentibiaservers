import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-europe');
}

export default function CyntaraCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-europe" />;
}
