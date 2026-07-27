import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria');
}

export default function WithDiscordAmeriaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria" />;
}
