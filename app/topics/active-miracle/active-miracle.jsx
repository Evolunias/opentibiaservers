import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle');
}

export default function ActiveMiracleKeywordPage() {
  return <StaticKeywordPage slug="active-miracle" />;
}
