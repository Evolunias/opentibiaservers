import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-register');
}

export default function BestMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-register" />;
}
