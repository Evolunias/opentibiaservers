import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-login');
}

export default function HighrateTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-login" />;
}
