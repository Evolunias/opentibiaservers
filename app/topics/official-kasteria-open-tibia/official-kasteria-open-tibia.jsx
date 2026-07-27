import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-open-tibia');
}

export default function OfficialKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-open-tibia" />;
}
