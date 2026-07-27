import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-discord');
}

export default function NewRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-realera-discord" />;
}
