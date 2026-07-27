import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle');
}

export default function NewMiracleKeywordPage() {
  return <StaticKeywordPage slug="new-miracle" />;
}
