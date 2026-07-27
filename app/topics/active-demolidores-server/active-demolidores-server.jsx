import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-server');
}

export default function ActiveDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-server" />;
}
