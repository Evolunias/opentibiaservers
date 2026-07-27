import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-open-tibia');
}

export default function OfficialClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-open-tibia" />;
}
