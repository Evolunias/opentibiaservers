import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-status');
}

export default function ClassicusStatusKeywordPage() {
  return <StaticKeywordPage slug="classicus-status" />;
}
