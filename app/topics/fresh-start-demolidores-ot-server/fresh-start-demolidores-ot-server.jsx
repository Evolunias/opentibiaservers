import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-ot-server');
}

export default function FreshStartDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-ot-server" />;
}
