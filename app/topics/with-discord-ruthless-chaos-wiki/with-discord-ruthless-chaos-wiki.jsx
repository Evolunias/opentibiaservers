import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-wiki');
}

export default function WithDiscordRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-wiki" />;
}
