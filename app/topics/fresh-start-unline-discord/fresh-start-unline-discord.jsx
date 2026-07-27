import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-discord');
}

export default function FreshStartUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-discord" />;
}
