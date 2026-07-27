import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-discord-server-sweden');
}

export default function TibiaoriginsWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-discord-server-sweden" />;
}
