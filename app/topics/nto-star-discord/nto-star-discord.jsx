import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-discord');
}

export default function NtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="nto-star-discord" />;
}
