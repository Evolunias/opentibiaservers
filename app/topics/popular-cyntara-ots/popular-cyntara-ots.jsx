import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-ots');
}

export default function PopularCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-ots" />;
}
