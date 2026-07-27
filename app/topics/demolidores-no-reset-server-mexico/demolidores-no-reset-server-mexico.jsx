import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-mexico');
}

export default function DemolidoresNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-mexico" />;
}
