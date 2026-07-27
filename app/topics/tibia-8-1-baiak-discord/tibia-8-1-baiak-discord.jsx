import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-discord');
}

export default function Tibia81BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-discord" />;
}
