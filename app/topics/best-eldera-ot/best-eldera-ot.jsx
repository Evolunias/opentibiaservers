import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-ot');
}

export default function BestElderaOtKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-ot" />;
}
