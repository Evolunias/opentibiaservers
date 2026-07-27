import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-discord');
}

export default function OfficialYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-discord" />;
}
