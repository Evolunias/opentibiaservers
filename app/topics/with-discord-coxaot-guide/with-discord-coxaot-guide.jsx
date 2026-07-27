import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-guide');
}

export default function WithDiscordCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-guide" />;
}
