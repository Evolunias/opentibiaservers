import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-sweden');
}

export default function OtmadnessWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-sweden" />;
}
