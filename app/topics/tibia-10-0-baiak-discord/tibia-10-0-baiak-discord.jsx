import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-discord');
}

export default function Tibia100BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-discord" />;
}
