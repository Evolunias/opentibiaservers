import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-register');
}

export default function WithDiscordEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-register" />;
}
