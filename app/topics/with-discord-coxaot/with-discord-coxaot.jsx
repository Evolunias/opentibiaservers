import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot');
}

export default function WithDiscordCoxaotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot" />;
}
