import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-discord');
}

export default function Tibia96BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-discord" />;
}
