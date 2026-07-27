import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-south-america');
}

export default function BaiakDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-south-america" />;
}
