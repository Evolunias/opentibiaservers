import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-rules');
}

export default function WithDiscordDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-rules" />;
}
