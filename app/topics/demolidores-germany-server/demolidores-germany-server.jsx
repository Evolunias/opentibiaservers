import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-germany-server');
}

export default function DemolidoresGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-germany-server" />;
}
