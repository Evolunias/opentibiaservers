import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-ots');
}

export default function BestClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-ots" />;
}
