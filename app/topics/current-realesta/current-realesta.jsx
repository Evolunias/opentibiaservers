import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta');
}

export default function CurrentRealestaKeywordPage() {
  return <StaticKeywordPage slug="current-realesta" />;
}
