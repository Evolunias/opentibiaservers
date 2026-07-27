import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-discord');
}

export default function LowrateMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-discord" />;
}
