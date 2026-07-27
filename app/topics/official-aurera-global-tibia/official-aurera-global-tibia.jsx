import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-tibia');
}

export default function OfficialAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-tibia" />;
}
