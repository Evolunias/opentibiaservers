import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-ot-server');
}

export default function DemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-ot-server" />;
}
