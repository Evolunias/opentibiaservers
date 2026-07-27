import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-register');
}

export default function WithDiscordYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-register" />;
}
