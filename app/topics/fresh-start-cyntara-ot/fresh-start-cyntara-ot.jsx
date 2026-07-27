import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-ot');
}

export default function FreshStartCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-ot" />;
}
