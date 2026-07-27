import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-discord');
}

export default function NoResetClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-discord" />;
}
