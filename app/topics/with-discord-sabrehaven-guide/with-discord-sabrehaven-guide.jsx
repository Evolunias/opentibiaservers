import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-guide');
}

export default function WithDiscordSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-guide" />;
}
