import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-argentina-servers');
}

export default function ClassicusArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-argentina-servers" />;
}
