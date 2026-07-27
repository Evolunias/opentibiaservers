import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta');
}

export default function LowrateRealestaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta" />;
}
