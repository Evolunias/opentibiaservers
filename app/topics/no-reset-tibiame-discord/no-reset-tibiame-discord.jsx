import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-discord');
}

export default function NoResetTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-discord" />;
}
