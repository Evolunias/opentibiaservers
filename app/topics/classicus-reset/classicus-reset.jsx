import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-reset');
}

export default function ClassicusResetKeywordPage() {
  return <StaticKeywordPage slug="classicus-reset" />;
}
