import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-login');
}

export default function NewDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-login" />;
}
