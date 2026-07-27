import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-tibia');
}

export default function FreshStartYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-tibia" />;
}
