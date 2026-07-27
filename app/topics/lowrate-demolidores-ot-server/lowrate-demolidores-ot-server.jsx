import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-ot-server');
}

export default function LowrateDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-ot-server" />;
}
