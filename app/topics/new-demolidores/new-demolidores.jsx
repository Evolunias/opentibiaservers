import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores');
}

export default function NewDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores" />;
}
