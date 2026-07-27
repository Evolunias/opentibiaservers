import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-discord');
}

export default function WithDiscordCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-discord" />;
}
