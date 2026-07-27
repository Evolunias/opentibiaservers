import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-poland');
}

export default function CyntaraCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-poland" />;
}
