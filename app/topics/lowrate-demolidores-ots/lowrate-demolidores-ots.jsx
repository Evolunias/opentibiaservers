import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-ots');
}

export default function LowrateDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-ots" />;
}
