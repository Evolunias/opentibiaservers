import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-discord');
}

export default function ActiveRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-realera-discord" />;
}
