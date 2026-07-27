import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-open-tibia');
}

export default function OfficialAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-open-tibia" />;
}
