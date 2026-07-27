import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-ot');
}

export default function TopOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-ot" />;
}
