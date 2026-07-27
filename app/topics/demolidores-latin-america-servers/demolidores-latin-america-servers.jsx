import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-latin-america-servers');
}

export default function DemolidoresLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-latin-america-servers" />;
}
