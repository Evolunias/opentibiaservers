import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-discord');
}

export default function FreshStartImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-discord" />;
}
