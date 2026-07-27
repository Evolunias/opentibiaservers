import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-login');
}

export default function TopMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-login" />;
}
