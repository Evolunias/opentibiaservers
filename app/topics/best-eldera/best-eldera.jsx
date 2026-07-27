import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera');
}

export default function BestElderaKeywordPage() {
  return <StaticKeywordPage slug="best-eldera" />;
}
