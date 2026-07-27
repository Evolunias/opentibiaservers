import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-ots');
}

export default function ClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="classicus-ots" />;
}
