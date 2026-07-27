import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-client');
}

export default function HighrateDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-client" />;
}
