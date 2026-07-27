import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-website');
}

export default function WithDiscordMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-website" />;
}
