import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-tibia');
}

export default function ActiveYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-tibia" />;
}
