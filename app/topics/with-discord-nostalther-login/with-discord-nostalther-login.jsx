import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-login');
}

export default function WithDiscordNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-login" />;
}
