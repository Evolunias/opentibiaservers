import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-client');
}

export default function ActiveDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-client" />;
}
