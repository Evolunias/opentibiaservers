import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-north-america');
}

export default function MidhemWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-north-america" />;
}
