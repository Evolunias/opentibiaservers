import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-discord');
}

export default function OldSchoolSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-discord" />;
}
