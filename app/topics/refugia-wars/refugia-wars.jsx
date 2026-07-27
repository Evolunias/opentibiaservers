import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-wars');
}

export default function RefugiaWarsKeywordPage() {
  return <StaticKeywordPage slug="refugia-wars" />;
}
