import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-register');
}

export default function MiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="miracle-register" />;
}
