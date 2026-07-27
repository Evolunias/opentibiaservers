import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-discord');
}

export default function NoResetNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-discord" />;
}
