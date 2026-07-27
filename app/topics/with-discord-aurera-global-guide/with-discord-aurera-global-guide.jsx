import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-guide');
}

export default function WithDiscordAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-guide" />;
}
