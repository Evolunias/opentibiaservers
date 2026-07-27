import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-discord');
}

export default function NewArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-discord" />;
}
