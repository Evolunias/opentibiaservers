import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores');
}

export default function LowrateDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores" />;
}
