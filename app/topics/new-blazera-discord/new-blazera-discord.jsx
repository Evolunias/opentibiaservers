import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-discord');
}

export default function NewBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-discord" />;
}
