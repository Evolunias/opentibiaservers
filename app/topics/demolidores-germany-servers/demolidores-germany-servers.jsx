import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-germany-servers');
}

export default function DemolidoresGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-germany-servers" />;
}
