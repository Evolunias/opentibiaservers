import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-client');
}

export default function ClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="classicus-client" />;
}
