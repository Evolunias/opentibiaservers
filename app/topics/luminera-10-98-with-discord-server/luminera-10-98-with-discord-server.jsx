import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-with-discord-server');
}

export default function Luminera1098WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-with-discord-server" />;
}
