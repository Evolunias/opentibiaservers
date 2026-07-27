import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-north-america-servers');
}

export default function DemolidoresNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-north-america-servers" />;
}
