import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-discord');
}

export default function NostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="nostalther-discord" />;
}
