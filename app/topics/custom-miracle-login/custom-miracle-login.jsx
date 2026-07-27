import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-login');
}

export default function CustomMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-login" />;
}
