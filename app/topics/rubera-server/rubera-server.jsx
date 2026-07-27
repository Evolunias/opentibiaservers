import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-server');
}

export default function RuberaServerKeywordPage() {
  return <StaticKeywordPage slug="rubera-server" />;
}
