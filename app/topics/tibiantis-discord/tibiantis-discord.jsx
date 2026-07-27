import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-discord');
}

export default function TibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-discord" />;
}
