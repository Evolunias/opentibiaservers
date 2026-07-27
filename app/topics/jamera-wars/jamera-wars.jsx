import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-wars');
}

export default function JameraWarsKeywordPage() {
  return <StaticKeywordPage slug="jamera-wars" />;
}
