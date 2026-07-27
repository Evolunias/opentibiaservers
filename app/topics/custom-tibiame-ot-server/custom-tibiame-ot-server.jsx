import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-ot-server');
}

export default function CustomTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-ot-server" />;
}
