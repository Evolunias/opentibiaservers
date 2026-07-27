import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-mexico');
}

export default function WithDiscordServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-mexico" />;
}
