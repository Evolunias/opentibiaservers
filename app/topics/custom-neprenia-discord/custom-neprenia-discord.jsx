import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-discord');
}

export default function CustomNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-discord" />;
}
