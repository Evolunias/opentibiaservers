import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-client');
}

export default function BestElderaClientKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-client" />;
}
