import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-discord');
}

export default function Tibia14BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-discord" />;
}
