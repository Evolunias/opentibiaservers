import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-ot');
}

export default function TopCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-ot" />;
}
