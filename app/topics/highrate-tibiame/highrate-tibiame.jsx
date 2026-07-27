import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame');
}

export default function HighrateTibiameKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame" />;
}
