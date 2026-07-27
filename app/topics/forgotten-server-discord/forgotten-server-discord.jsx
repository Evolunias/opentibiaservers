import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-discord');
}

export default function ForgottenServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-discord" />;
}
