import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-discord');
}

export default function NoResetNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-discord" />;
}
