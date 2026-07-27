import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-ots');
}

export default function TopClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-ots" />;
}
