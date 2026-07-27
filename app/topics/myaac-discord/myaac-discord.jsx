import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-discord');
}

export default function MyaacDiscordKeywordPage() {
  return <StaticKeywordPage slug="myaac-discord" />;
}
