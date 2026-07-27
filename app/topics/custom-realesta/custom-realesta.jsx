import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta');
}

export default function CustomRealestaKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta" />;
}
