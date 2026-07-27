import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores');
}

export default function NoResetDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores" />;
}
