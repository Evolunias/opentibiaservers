import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot');
}

export default function BestOxygenotKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot" />;
}
