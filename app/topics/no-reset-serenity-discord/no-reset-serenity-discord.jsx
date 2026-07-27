import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-discord');
}

export default function NoResetSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-discord" />;
}
