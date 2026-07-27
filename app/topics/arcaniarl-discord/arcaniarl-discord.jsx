import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-discord');
}

export default function ArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-discord" />;
}
