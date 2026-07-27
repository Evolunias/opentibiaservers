import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-discord');
}

export default function CustomRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-discord" />;
}
