import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-discord');
}

export default function TheForgottenServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-discord" />;
}
