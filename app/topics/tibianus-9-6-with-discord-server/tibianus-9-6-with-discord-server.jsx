import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-with-discord-server');
}

export default function Tibianus96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-with-discord-server" />;
}
