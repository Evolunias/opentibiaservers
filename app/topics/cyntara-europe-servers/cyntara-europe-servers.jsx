import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-europe-servers');
}

export default function CyntaraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-europe-servers" />;
}
