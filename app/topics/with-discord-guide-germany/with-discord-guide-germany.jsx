import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-germany');
}

export default function WithDiscordGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-germany" />;
}
