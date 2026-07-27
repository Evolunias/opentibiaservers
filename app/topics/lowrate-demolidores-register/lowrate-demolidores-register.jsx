import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-register');
}

export default function LowrateDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-register" />;
}
