import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-ot-server');
}

export default function CustomDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-ot-server" />;
}
