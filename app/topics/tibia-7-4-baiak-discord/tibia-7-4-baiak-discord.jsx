import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-discord');
}

export default function Tibia74BaiakDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-discord" />;
}
