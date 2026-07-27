import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-login');
}

export default function MiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="miracle-login" />;
}
