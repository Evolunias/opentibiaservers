import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-argentina-server');
}

export default function DemolidoresArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-argentina-server" />;
}
