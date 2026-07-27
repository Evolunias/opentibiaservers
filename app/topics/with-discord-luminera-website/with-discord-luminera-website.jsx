import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-website');
}

export default function WithDiscordLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-website" />;
}
