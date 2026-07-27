import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta');
}

export default function RealestaKeywordPage() {
  return <StaticKeywordPage slug="realesta" />;
}
