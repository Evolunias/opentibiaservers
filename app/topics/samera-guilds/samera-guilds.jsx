import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-guilds');
}

export default function SameraGuildsKeywordPage() {
  return <StaticKeywordPage slug="samera-guilds" />;
}
