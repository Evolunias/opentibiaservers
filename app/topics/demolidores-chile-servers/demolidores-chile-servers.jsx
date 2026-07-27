import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-chile-servers');
}

export default function DemolidoresChileServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-chile-servers" />;
}
