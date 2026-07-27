import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-discord');
}

export default function LowrateImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-discord" />;
}
