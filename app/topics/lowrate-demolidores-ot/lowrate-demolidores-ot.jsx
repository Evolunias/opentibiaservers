import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-ot');
}

export default function LowrateDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-ot" />;
}
