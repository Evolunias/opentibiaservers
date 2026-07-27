import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-discord');
}

export default function RealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="realera-discord" />;
}
