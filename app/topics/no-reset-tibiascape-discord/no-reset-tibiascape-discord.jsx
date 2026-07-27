import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-discord');
}

export default function NoResetTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-discord" />;
}
