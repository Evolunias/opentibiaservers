import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-login');
}

export default function DemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="demolidores-login" />;
}
