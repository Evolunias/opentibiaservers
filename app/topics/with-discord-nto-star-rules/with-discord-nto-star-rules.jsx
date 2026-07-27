import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-rules');
}

export default function WithDiscordNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-rules" />;
}
