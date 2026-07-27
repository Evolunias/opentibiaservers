import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-chile-server');
}

export default function DemolidoresChileServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-chile-server" />;
}
