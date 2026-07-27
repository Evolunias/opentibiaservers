import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-north-america');
}

export default function LumineraWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-north-america" />;
}
