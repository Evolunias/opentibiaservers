import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-rules');
}

export default function WithDiscordRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-rules" />;
}
