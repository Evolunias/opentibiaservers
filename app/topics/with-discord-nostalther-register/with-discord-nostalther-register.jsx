import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-register');
}

export default function WithDiscordNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-register" />;
}
