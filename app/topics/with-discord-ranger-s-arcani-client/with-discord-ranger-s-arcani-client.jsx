import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-client');
}

export default function WithDiscordRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-client" />;
}
