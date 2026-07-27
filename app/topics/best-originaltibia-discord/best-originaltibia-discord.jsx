import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-discord');
}

export default function BestOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-discord" />;
}
