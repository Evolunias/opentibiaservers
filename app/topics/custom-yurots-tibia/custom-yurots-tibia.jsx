import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-tibia');
}

export default function CustomYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-tibia" />;
}
