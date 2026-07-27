import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot');
}

export default function LowrateCarlinotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot" />;
}
