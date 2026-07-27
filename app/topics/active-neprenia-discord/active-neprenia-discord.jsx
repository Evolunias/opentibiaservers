import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-discord');
}

export default function ActiveNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-discord" />;
}
