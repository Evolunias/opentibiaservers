import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-ot');
}

export default function BestRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-ot" />;
}
