import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-ot');
}

export default function BestDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-ot" />;
}
