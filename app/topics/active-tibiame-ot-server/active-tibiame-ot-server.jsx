import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-ot-server');
}

export default function ActiveTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-ot-server" />;
}
