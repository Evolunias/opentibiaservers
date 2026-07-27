import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-discord');
}

export default function NewNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-discord" />;
}
