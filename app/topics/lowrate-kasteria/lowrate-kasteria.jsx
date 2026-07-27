import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria');
}

export default function LowrateKasteriaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria" />;
}
