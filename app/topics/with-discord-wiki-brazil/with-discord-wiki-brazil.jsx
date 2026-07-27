import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-brazil');
}

export default function WithDiscordWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-brazil" />;
}
