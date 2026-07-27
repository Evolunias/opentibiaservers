import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-ots');
}

export default function NewMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-ots" />;
}
