import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-open-tibia');
}

export default function TopYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-open-tibia" />;
}
