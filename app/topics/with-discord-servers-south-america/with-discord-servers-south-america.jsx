import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-south-america');
}

export default function WithDiscordServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-south-america" />;
}
