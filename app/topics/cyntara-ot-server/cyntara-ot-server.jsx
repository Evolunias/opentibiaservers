import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-ot-server');
}

export default function CyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-ot-server" />;
}
