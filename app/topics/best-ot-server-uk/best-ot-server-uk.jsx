import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-uk');
}

export default function BestOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-uk" />;
}
