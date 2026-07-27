import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-discord');
}

export default function CustomOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-discord" />;
}
