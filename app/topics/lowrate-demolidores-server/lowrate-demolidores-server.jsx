import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-server');
}

export default function LowrateDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-server" />;
}
