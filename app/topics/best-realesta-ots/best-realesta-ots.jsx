import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-ots');
}

export default function BestRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-ots" />;
}
