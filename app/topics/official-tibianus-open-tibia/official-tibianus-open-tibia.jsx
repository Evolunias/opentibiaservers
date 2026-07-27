import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-open-tibia');
}

export default function OfficialTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-open-tibia" />;
}
