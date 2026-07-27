import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-website');
}

export default function WithDiscordEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-website" />;
}
