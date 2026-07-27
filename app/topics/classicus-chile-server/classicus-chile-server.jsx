import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-chile-server');
}

export default function ClassicusChileServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-chile-server" />;
}
