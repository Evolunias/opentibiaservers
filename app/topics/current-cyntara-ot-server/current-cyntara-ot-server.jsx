import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-ot-server');
}

export default function CurrentCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-ot-server" />;
}
