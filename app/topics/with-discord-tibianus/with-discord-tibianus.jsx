import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus');
}

export default function WithDiscordTibianusKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus" />;
}
