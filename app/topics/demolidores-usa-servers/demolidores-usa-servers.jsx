import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-usa-servers');
}

export default function DemolidoresUsaServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-usa-servers" />;
}
