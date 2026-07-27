import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-discord');
}

export default function FreshStartTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-discord" />;
}
