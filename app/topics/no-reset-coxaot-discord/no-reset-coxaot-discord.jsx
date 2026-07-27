import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-discord');
}

export default function NoResetCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-discord" />;
}
