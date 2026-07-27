import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-register');
}

export default function ActiveMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-register" />;
}
