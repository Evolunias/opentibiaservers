import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fun-server');
}

export default function DemolidoresFunServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fun-server" />;
}
