import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-discord');
}

export default function LowrateSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-discord" />;
}
