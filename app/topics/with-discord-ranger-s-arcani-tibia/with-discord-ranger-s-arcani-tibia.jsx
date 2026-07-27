import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-tibia');
}

export default function WithDiscordRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-tibia" />;
}
