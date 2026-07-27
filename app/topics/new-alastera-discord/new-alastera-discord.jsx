import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-discord');
}

export default function NewAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-discord" />;
}
