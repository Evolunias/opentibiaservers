import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-client');
}

export default function NewDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-client" />;
}
