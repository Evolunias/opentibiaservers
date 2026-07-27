import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-login');
}

export default function LowrateMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-login" />;
}
