import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-wars');
}

export default function KasteriaWarsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-wars" />;
}
