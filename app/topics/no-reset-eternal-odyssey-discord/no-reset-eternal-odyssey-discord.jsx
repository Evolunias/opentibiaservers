import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-discord');
}

export default function NoResetEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-discord" />;
}
