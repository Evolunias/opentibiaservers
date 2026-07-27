import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani');
}

export default function WithDiscordRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani" />;
}
