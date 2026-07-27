import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-north-america');
}

export default function ClassicusWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-north-america" />;
}
