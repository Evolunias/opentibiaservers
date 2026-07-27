import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-ot-server');
}

export default function FreshStartRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-ot-server" />;
}
