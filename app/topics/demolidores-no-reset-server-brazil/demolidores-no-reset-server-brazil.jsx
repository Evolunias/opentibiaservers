import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-brazil');
}

export default function DemolidoresNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-brazil" />;
}
