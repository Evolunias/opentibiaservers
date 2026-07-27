import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-server');
}

export default function NewDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-server" />;
}
