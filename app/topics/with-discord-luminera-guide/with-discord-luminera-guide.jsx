import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-guide');
}

export default function WithDiscordLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-guide" />;
}
