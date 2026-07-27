import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-discord');
}

export default function NewOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-discord" />;
}
