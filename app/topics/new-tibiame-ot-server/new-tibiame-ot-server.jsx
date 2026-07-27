import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-ot-server');
}

export default function NewTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-ot-server" />;
}
