import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-discord');
}

export default function Tibia12BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-discord" />;
}
