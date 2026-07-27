import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-latin-america');
}

export default function WithDiscordStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-latin-america" />;
}
