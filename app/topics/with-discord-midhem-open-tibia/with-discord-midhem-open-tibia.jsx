import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-open-tibia');
}

export default function WithDiscordMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-open-tibia" />;
}
