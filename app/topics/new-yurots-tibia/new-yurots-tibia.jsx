import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-tibia');
}

export default function NewYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-tibia" />;
}
