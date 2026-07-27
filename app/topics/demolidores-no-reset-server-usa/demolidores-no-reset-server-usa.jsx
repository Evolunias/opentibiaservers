import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-usa');
}

export default function DemolidoresNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-usa" />;
}
