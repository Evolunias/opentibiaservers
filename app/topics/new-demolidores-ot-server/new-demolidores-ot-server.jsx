import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-ot-server');
}

export default function NewDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-ot-server" />;
}
