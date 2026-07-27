import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-discord');
}

export default function OriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-discord" />;
}
