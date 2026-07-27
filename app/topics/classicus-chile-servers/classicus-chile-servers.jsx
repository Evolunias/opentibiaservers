import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-chile-servers');
}

export default function ClassicusChileServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-chile-servers" />;
}
