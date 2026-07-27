import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-register');
}

export default function CustomMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-register" />;
}
