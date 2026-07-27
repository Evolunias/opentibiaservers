import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-sweden');
}

export default function RetroDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-sweden" />;
}
