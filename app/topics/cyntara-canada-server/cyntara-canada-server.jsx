import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-canada-server');
}

export default function CyntaraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-canada-server" />;
}
