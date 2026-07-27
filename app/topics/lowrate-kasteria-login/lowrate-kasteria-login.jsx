import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-login');
}

export default function LowrateKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-login" />;
}
