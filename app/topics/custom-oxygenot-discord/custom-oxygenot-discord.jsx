import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-discord');
}

export default function CustomOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-discord" />;
}
