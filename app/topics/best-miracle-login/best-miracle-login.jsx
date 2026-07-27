import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-login');
}

export default function BestMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-login" />;
}
