import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-mexico');
}

export default function WithDiscordGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-mexico" />;
}
