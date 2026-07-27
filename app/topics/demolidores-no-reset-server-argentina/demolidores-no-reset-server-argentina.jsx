import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-argentina');
}

export default function DemolidoresNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-argentina" />;
}
