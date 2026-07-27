import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-europe');
}

export default function WithDiscordGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-europe" />;
}
