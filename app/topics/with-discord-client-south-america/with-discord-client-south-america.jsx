import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-south-america');
}

export default function WithDiscordClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-south-america" />;
}
