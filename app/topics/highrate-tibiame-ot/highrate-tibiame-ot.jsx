import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-ot');
}

export default function HighrateTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-ot" />;
}
