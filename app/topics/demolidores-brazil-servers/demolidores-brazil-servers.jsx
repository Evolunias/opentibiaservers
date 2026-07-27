import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-brazil-servers');
}

export default function DemolidoresBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-brazil-servers" />;
}
