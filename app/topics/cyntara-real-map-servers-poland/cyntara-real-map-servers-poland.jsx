import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-poland');
}

export default function CyntaraRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-poland" />;
}
