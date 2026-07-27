import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-wars');
}

export default function ThorniaWarsKeywordPage() {
  return <StaticKeywordPage slug="thornia-wars" />;
}
