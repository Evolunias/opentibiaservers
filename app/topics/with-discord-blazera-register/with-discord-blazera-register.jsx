import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-register');
}

export default function WithDiscordBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-register" />;
}
