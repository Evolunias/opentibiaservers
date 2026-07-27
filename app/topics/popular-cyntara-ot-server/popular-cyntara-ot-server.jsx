import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-ot-server');
}

export default function PopularCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-ot-server" />;
}
