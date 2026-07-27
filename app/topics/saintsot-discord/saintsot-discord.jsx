import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-discord');
}

export default function SaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="saintsot-discord" />;
}
