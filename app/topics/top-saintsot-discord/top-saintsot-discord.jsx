import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-discord');
}

export default function TopSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-discord" />;
}
