import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-rules');
}

export default function WithDiscordXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-rules" />;
}
