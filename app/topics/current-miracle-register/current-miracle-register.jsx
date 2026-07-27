import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-register');
}

export default function CurrentMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-register" />;
}
