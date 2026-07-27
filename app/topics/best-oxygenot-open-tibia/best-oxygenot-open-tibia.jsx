import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-open-tibia');
}

export default function BestOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-open-tibia" />;
}
