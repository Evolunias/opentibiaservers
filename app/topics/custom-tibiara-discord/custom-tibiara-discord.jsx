import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-discord');
}

export default function CustomTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-discord" />;
}
