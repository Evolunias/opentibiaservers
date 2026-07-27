import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-website');
}

export default function WithDiscordSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-website" />;
}
