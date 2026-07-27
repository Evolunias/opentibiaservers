import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-ot-server');
}

export default function TopTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-ot-server" />;
}
