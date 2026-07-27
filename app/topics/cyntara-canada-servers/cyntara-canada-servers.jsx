import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-canada-servers');
}

export default function CyntaraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-canada-servers" />;
}
