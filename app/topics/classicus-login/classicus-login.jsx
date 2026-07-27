import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-login');
}

export default function ClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="classicus-login" />;
}
