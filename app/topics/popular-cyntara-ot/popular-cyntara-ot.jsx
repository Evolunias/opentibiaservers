import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-ot');
}

export default function PopularCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-ot" />;
}
