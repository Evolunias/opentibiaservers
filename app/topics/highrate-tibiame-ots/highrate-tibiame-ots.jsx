import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-ots');
}

export default function HighrateTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-ots" />;
}
