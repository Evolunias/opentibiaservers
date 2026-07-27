import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-open-tibia');
}

export default function OfficialEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-open-tibia" />;
}
