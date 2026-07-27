import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-discord');
}

export default function LowrateAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-discord" />;
}
