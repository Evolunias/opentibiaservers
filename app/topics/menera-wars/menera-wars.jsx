import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-wars');
}

export default function MeneraWarsKeywordPage() {
  return <StaticKeywordPage slug="menera-wars" />;
}
