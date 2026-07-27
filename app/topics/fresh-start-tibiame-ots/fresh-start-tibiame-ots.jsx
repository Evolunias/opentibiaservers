import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-ots');
}

export default function FreshStartTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-ots" />;
}
