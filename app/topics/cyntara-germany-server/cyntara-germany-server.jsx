import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-germany-server');
}

export default function CyntaraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-germany-server" />;
}
