import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-tibia');
}

export default function BestOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-tibia" />;
}
