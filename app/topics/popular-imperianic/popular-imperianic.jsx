import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic');
}

export default function PopularImperianicKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic" />;
}
