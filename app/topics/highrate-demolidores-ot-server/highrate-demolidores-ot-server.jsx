import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-ot-server');
}

export default function HighrateDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-ot-server" />;
}
