import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-discord');
}

export default function LowrateClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-discord" />;
}
