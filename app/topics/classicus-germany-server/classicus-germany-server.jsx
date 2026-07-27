import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-germany-server');
}

export default function ClassicusGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-germany-server" />;
}
