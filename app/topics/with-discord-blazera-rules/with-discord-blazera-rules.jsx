import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-rules');
}

export default function WithDiscordBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-rules" />;
}
