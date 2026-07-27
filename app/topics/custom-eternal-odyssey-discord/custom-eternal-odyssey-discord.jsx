import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-discord');
}

export default function CustomEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-discord" />;
}
