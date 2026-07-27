import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-discord');
}

export default function CustomRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-discord" />;
}
