import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-discord');
}

export default function ActiveYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-discord" />;
}
