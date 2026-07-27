import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-ot');
}

export default function HighrateDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-ot" />;
}
