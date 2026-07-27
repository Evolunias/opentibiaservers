import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-discord');
}

export default function FreshStartClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-discord" />;
}
