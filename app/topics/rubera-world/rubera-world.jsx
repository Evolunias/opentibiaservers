import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-world');
}

export default function RuberaWorldKeywordPage() {
  return <StaticKeywordPage slug="rubera-world" />;
}
