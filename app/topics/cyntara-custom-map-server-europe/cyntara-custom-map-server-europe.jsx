import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-europe');
}

export default function CyntaraCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-europe" />;
}
