import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-ot-server');
}

export default function TopCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-ot-server" />;
}
