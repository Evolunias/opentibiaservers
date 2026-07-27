import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-discord');
}

export default function ThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="thaisot-discord" />;
}
