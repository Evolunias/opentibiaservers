import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-discord');
}

export default function Tibia71BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-discord" />;
}
