import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-open-tibia');
}

export default function NewYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-open-tibia" />;
}
