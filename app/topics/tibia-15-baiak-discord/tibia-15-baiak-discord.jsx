import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-discord');
}

export default function Tibia15BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-discord" />;
}
