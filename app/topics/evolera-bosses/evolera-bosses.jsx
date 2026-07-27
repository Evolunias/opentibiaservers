import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-bosses');
}

export default function EvoleraBossesKeywordPage() {
  return <StaticKeywordPage slug="evolera-bosses" />;
}
