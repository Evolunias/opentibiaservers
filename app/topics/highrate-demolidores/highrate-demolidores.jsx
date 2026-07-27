import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores');
}

export default function HighrateDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores" />;
}
