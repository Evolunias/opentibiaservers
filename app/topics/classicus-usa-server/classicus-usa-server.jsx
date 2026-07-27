import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-usa-server');
}

export default function ClassicusUsaServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-usa-server" />;
}
