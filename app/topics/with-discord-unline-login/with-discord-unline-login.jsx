import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-login');
}

export default function WithDiscordUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-login" />;
}
