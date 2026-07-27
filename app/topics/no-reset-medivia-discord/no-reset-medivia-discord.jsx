import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-discord');
}

export default function NoResetMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-discord" />;
}
