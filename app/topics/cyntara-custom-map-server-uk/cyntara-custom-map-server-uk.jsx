import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-uk');
}

export default function CyntaraCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-uk" />;
}
