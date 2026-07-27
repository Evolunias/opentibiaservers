import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot');
}

export default function TopOxygenotKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot" />;
}
