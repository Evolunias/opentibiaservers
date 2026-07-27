import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-guilds');
}

export default function MediviaGuildsKeywordPage() {
  return <StaticKeywordPage slug="medivia-guilds" />;
}
