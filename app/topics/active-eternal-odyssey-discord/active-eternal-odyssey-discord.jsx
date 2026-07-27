import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-discord');
}

export default function ActiveEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-discord" />;
}
