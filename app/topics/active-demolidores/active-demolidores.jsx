import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores');
}

export default function ActiveDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores" />;
}
