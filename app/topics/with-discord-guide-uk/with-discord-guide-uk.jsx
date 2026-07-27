import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-uk');
}

export default function WithDiscordGuideUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-uk" />;
}
