import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-poland');
}

export default function CyntaraCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-poland" />;
}
