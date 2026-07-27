import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-discord');
}

export default function NoResetMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-discord" />;
}
