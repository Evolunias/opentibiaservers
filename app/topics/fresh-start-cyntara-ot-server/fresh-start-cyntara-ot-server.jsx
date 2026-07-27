import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-ot-server');
}

export default function FreshStartCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-ot-server" />;
}
