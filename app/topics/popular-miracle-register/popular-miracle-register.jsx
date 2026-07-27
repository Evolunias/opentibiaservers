import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-register');
}

export default function PopularMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-register" />;
}
