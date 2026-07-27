import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-discord');
}

export default function OfficialOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-discord" />;
}
