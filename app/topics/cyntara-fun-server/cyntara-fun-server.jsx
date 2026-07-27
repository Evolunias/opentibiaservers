import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fun-server');
}

export default function CyntaraFunServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fun-server" />;
}
