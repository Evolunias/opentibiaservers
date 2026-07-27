import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-server');
}

export default function PytheraServerKeywordPage() {
  return <StaticKeywordPage slug="pythera-server" />;
}
