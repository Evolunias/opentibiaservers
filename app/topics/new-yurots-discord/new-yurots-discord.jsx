import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-discord');
}

export default function NewYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-discord" />;
}
