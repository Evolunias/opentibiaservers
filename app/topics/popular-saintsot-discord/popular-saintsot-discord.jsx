import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-discord');
}

export default function PopularSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-discord" />;
}
