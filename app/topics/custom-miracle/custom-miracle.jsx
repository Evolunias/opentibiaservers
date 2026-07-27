import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle');
}

export default function CustomMiracleKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle" />;
}
