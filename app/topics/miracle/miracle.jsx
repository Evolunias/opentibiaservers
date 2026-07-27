import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle');
}

export default function MiracleKeywordPage() {
  return <StaticKeywordPage slug="miracle" />;
}
