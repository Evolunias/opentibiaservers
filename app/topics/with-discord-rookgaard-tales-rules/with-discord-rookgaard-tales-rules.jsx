import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-rules');
}

export default function WithDiscordRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-rules" />;
}
