import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-rules');
}

export default function WithDiscordAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-rules" />;
}
