import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-with-discord-server');
}

export default function Tibianus772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-with-discord-server" />;
}
