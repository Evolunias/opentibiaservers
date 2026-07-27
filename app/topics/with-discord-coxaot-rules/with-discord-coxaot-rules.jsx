import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-rules');
}

export default function WithDiscordCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-rules" />;
}
