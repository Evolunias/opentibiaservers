import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-ots');
}

export default function TopTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-ots" />;
}
