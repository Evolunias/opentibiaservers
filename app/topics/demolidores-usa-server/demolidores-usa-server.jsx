import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-usa-server');
}

export default function DemolidoresUsaServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-usa-server" />;
}
