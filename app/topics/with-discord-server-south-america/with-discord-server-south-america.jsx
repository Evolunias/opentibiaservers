import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-south-america');
}

export default function WithDiscordServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-south-america" />;
}
