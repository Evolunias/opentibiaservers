import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-discord');
}

export default function RealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="realesta-discord" />;
}
