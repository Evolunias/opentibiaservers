import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-discord');
}

export default function NoResetDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-discord" />;
}
