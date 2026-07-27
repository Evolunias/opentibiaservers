import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-discord');
}

export default function OfficialSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-discord" />;
}
