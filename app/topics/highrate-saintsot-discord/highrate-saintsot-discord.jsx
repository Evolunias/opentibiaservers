import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-discord');
}

export default function HighrateSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-discord" />;
}
