import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-discord');
}

export default function CustomBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-discord" />;
}
