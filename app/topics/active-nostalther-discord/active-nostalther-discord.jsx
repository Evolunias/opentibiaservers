import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-discord');
}

export default function ActiveNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-discord" />;
}
