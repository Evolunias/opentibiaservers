import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-ots');
}

export default function CurrentTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-ots" />;
}
