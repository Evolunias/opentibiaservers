import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-wars');
}

export default function RealestaWarsKeywordPage() {
  return <StaticKeywordPage slug="realesta-wars" />;
}
