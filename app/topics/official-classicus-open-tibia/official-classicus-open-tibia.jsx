import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-open-tibia');
}

export default function OfficialClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-open-tibia" />;
}
