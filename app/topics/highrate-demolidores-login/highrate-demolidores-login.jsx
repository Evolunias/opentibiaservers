import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-login');
}

export default function HighrateDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-login" />;
}
