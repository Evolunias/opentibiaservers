import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-discord');
}

export default function Tibia1098BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-discord" />;
}
