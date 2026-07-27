import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-discord');
}

export default function CurrentImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-discord" />;
}
