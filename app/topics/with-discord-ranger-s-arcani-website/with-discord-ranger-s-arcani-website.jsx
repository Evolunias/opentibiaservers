import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-website');
}

export default function WithDiscordRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-website" />;
}
