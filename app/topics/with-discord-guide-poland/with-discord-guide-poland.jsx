import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-poland');
}

export default function WithDiscordGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-poland" />;
}
