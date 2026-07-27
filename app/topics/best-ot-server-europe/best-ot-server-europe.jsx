import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-europe');
}

export default function BestOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-europe" />;
}
