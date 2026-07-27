import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria');
}

export default function WithDiscordClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria" />;
}
