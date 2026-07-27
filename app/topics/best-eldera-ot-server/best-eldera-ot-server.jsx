import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-ot-server');
}

export default function BestElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-ot-server" />;
}
