import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-latin-america-server');
}

export default function DemolidoresLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-latin-america-server" />;
}
