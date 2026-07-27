import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-discord');
}

export default function ActiveRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-discord" />;
}
