import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-ots');
}

export default function LowrateTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-ots" />;
}
