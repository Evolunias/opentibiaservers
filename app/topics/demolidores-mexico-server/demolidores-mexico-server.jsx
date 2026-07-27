import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-mexico-server');
}

export default function DemolidoresMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-mexico-server" />;
}
