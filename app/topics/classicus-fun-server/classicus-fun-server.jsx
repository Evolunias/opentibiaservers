import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fun-server');
}

export default function ClassicusFunServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-fun-server" />;
}
