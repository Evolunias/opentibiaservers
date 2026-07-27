import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-sweden');
}

export default function CustomMapDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-sweden" />;
}
