import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-discord');
}

export default function ActiveBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-discord" />;
}
