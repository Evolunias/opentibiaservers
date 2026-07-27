import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-client');
}

export default function CyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="cyntara-client" />;
}
