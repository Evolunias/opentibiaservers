import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-open-tibia');
}

export default function OfficialSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-open-tibia" />;
}
