import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-sweden');
}

export default function WithDiscordServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-sweden" />;
}
