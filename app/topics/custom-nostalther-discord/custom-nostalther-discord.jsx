import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-discord');
}

export default function CustomNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-discord" />;
}
