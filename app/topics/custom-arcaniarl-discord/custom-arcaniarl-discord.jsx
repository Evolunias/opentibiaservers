import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-discord');
}

export default function CustomArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-discord" />;
}
