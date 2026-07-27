import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-login');
}

export default function WithDiscordEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-login" />;
}
