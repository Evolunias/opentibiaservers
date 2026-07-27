import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-usa-server');
}

export default function CyntaraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-usa-server" />;
}
