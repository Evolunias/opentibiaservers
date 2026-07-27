import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-discord');
}

export default function ActiveOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-discord" />;
}
