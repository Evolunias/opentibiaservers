import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta');
}

export default function TopRealestaKeywordPage() {
  return <StaticKeywordPage slug="top-realesta" />;
}
