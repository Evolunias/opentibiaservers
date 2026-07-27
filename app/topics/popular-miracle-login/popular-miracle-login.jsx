import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-login');
}

export default function PopularMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-login" />;
}
