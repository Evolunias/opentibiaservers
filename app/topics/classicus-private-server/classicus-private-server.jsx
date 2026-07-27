import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-private-server');
}

export default function ClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-private-server" />;
}
