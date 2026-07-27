import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-tibia');
}

export default function OfficialSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-tibia" />;
}
