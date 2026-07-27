import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-client');
}

export default function LowrateDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-client" />;
}
