import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-ots');
}

export default function BestImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-ots" />;
}
