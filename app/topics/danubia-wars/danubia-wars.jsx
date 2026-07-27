import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-wars');
}

export default function DanubiaWarsKeywordPage() {
  return <StaticKeywordPage slug="danubia-wars" />;
}
