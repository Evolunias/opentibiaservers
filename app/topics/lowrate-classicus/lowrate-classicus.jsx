import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus');
}

export default function LowrateClassicusKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus" />;
}
