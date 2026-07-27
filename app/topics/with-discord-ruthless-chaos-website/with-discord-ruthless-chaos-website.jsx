import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-website');
}

export default function WithDiscordRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-website" />;
}
