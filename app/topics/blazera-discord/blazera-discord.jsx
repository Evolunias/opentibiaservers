import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-discord');
}

export default function BlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="blazera-discord" />;
}
