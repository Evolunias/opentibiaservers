import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-germany');
}

export default function DemolidoresNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-germany" />;
}
