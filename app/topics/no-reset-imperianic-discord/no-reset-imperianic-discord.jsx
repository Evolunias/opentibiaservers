import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-discord');
}

export default function NoResetImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-discord" />;
}
