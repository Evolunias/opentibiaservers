import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-ots');
}

export default function HighrateDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-ots" />;
}
