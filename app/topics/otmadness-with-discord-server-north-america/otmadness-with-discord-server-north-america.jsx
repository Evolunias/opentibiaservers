import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-north-america');
}

export default function OtmadnessWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-north-america" />;
}
