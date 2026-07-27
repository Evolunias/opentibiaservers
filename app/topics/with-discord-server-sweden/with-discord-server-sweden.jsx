import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-sweden');
}

export default function WithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-sweden" />;
}
