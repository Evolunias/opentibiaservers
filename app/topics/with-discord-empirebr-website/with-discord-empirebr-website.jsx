import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-website');
}

export default function WithDiscordEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-website" />;
}
