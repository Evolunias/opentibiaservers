import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-brazil-server');
}

export default function DemolidoresBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-brazil-server" />;
}
