import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-server');
}

export default function HighrateDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-server" />;
}
