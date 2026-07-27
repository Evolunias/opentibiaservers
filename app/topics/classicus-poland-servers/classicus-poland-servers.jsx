import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-poland-servers');
}

export default function ClassicusPolandServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-poland-servers" />;
}
