import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-europe-server');
}

export default function CyntaraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-europe-server" />;
}
