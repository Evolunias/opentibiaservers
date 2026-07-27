import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-login');
}

export default function LowrateCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-login" />;
}
