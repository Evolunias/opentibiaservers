import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-discord');
}

export default function NoResetMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-discord" />;
}
