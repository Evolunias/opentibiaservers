import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-sweden');
}

export default function ClassicusWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-sweden" />;
}
