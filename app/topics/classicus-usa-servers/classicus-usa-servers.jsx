import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-usa-servers');
}

export default function ClassicusUsaServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-usa-servers" />;
}
