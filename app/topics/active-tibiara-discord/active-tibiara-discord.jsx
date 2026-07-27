import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-discord');
}

export default function ActiveTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-discord" />;
}
