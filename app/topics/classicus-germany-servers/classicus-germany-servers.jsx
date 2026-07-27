import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-germany-servers');
}

export default function ClassicusGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-germany-servers" />;
}
