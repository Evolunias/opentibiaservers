import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-open-tibia');
}

export default function OfficialYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-open-tibia" />;
}
