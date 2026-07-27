import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-discord');
}

export default function NepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="neprenia-discord" />;
}
