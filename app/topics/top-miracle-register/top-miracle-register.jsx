import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-register');
}

export default function TopMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-register" />;
}
