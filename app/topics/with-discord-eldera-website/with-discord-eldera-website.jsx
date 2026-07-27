import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-website');
}

export default function WithDiscordElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-website" />;
}
