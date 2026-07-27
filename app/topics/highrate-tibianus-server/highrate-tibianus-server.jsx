import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-server');
}

export default function HighrateTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-server" />;
}
