import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-open-tibia');
}

export default function FreshStartYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-open-tibia" />;
}
