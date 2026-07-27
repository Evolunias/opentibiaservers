import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-discord');
}

export default function FreshStartSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-discord" />;
}
