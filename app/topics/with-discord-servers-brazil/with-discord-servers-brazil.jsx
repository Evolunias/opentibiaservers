import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-brazil');
}

export default function WithDiscordServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-brazil" />;
}
