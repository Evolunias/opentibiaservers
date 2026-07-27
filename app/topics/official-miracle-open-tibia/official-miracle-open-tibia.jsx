import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-open-tibia');
}

export default function OfficialMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-open-tibia" />;
}
