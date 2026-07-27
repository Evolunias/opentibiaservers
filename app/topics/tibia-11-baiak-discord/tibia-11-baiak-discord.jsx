import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-discord');
}

export default function Tibia11BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-discord" />;
}
