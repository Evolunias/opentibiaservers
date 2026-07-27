import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-germany');
}

export default function CustomMapDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-germany" />;
}
