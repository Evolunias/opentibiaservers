import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-login');
}

export default function LowrateDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-login" />;
}
