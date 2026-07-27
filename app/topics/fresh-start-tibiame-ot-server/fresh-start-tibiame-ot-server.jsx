import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-ot-server');
}

export default function FreshStartTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-ot-server" />;
}
