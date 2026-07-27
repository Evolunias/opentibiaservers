import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-server');
}

export default function DemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-server" />;
}
