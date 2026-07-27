import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-discord');
}

export default function TibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibianus-discord" />;
}
