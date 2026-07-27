import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-ot-server');
}

export default function LowrateTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-ot-server" />;
}
