import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-south-america');
}

export default function CustomMapDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-south-america" />;
}
