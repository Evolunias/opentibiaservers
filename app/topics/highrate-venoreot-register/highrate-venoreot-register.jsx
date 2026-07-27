import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-register');
}

export default function HighrateVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-register" />;
}
