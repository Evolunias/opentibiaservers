import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-ot-server');
}

export default function TibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-ot-server" />;
}
