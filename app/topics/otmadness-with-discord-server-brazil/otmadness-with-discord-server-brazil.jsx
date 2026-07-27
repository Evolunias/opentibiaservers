import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-brazil');
}

export default function OtmadnessWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-brazil" />;
}
