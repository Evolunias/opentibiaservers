import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-tibia');
}

export default function OfficialYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-tibia" />;
}
