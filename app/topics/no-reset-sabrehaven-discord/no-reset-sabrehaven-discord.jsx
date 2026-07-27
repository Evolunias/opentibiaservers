import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-discord');
}

export default function NoResetSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-discord" />;
}
