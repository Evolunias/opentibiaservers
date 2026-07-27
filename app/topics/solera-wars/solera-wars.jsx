import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-wars');
}

export default function SoleraWarsKeywordPage() {
  return <StaticKeywordPage slug="solera-wars" />;
}
