import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-discord');
}

export default function ActiveNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-discord" />;
}
