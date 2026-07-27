import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-ot');
}

export default function CurrentCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-ot" />;
}
