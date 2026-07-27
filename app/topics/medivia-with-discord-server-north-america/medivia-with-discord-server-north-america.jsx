import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-north-america');
}

export default function MediviaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-north-america" />;
}
