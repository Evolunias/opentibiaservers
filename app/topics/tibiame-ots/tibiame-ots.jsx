import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-ots');
}

export default function TibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-ots" />;
}
