import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-discord-server-north-america');
}

export default function UnlineWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-discord-server-north-america" />;
}
