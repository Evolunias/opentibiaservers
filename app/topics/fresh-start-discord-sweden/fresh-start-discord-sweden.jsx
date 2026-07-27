import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-sweden');
}

export default function FreshStartDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-sweden" />;
}
