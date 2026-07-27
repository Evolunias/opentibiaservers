import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-discord');
}

export default function FreshStartThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-discord" />;
}
