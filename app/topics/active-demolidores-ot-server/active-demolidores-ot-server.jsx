import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-ot-server');
}

export default function ActiveDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-ot-server" />;
}
