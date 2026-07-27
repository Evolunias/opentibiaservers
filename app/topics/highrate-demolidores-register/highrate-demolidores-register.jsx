import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-register');
}

export default function HighrateDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-register" />;
}
