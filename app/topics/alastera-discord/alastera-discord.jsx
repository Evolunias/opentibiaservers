import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-discord');
}

export default function AlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="alastera-discord" />;
}
