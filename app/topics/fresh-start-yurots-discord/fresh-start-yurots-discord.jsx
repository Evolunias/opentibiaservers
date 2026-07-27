import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-discord');
}

export default function FreshStartYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-discord" />;
}
