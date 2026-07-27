import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-argentina-server');
}

export default function ClassicusArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-argentina-server" />;
}
