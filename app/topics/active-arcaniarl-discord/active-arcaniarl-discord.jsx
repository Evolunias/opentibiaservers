import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-discord');
}

export default function ActiveArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-discord" />;
}
