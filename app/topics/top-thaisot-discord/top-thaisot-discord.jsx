import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-discord');
}

export default function TopThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-discord" />;
}
