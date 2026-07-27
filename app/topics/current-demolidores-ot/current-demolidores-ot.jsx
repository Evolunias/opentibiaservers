import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-ot');
}

export default function CurrentDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-ot" />;
}
