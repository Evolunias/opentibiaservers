import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-poland-server');
}

export default function ClassicusPolandServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-poland-server" />;
}
