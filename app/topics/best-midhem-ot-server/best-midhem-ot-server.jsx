import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-ot-server');
}

export default function BestMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-ot-server" />;
}
