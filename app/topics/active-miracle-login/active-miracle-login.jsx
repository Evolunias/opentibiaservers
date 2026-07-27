import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-login');
}

export default function ActiveMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-login" />;
}
