import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-login');
}

export default function CurrentMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-login" />;
}
