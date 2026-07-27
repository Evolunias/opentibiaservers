import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-poland');
}

export default function BestOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-poland" />;
}
