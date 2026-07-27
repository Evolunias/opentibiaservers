import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-ots');
}

export default function BestElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-ots" />;
}
