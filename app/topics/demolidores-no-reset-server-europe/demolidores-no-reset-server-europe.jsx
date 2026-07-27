import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-europe');
}

export default function DemolidoresNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-europe" />;
}
