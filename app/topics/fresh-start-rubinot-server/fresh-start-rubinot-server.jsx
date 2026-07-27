import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-server');
}

export default function FreshStartRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-server" />;
}
