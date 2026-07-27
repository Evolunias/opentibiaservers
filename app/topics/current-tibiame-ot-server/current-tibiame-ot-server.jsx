import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-ot-server');
}

export default function CurrentTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-ot-server" />;
}
