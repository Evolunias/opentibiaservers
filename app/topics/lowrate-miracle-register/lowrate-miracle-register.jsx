import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-register');
}

export default function LowrateMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-register" />;
}
