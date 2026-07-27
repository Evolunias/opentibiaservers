import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-discord');
}

export default function TibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibijka-discord" />;
}
