import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-wars');
}

export default function RealeraWarsKeywordPage() {
  return <StaticKeywordPage slug="realera-wars" />;
}
