import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-guide');
}

export default function WithDiscordEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-guide" />;
}
